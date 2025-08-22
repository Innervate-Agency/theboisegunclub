"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion"
import { Badge } from "./badge"
import { Input } from "./input"
import { MagnifyingGlassIcon, HelpCircle } from "@heroicons/react/24/outline"

const faqAccordionVariants = cva(
  "w-full",
  {
    variants: {
      variant: {
        default: "space-y-4",
        compact: "space-y-4",
        card: "space-y-4"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
)

interface FAQ {
  id: string
  question: string
  answer: string
  category?: string
}

export interface FAQAccordionProps 
  extends React.ComponentProps<"div">,
    VariantProps<typeof faqAccordionVariants> {
  faqs: FAQ[]
  showCategories?: boolean
  showSearch?: boolean
  title?: string  
  subtitle?: string
}

export default function FAQAccordion({
  className,
  faqs,
  variant,
  showCategories = true,
  showSearch = true,
  title = "Frequently Asked Questions",
  subtitle,
  ...props
}: FAQAccordionProps) {
  const [searchTerm, setSearchTerm] = React.useState("")
  const [selectedCategory, setSelectedCategory] = React.useState<string | null>(null)

  // Filter FAQs based on search term and category
  const filteredFAQs = React.useMemo(() => {
    return faqs.filter(faq => {
      const matchesSearch = !searchTerm || 
        faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
        faq.answer.toLowerCase().includes(searchTerm.toLowerCase())
      
      const matchesCategory = !selectedCategory || faq.category === selectedCategory
      
      return matchesSearch && matchesCategory
    })
  }, [faqs, searchTerm, selectedCategory])

  // Get unique categories
  const categories = React.useMemo(() => {
    const cats = faqs
      .map(faq => faq.category)
      .filter((cat): cat is string => cat !== undefined)
    return Array.from(new Set(cats))
  }, [faqs])

  return (
    <div className={cn(faqAccordionVariants({ variant }), className)} {...props}>
      {/* Header */}
      <div className="text-center mb-4">
        <div className="flex justify-center mb-4">
          <div className="p-sm bg-sandy-ochre/10 rounded-full border border-sandy-ochre/20">
            <HelpCircle className="size-6 text-sandy-ochre" />
          </div>
        </div>
        
        <h2 className="text-heading-md md:text-heading-lg font-rajdhani font-bold text-dark-chocolate mb-4">
          {title}
        </h2>
        
        {subtitle && (
          <p className="text-warning-amber font-noto-sans leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      {/* Search */}
      {showSearch && (
        <div className="mb-4">
          <div className="relative">
            <MagnifyingGlassIcon className="absolute left-3 top-micro/2 transform -translate-y-1/2 size-4 text-warning-amber" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              style={{paddingLeft: '48px'}}
            />
          </div>
        </div>
      )}

      {/* Category Filters */}
      {showCategories && categories.length > 0 && (
        <div className="flex flex-wrap gap-xs mb-4">
          <button
            onClick={() => setSelectedCategory(null)}
            className={cn(
              "px-sm py-xs rounded-full text-body-sm font-medium transition-colors",
              !selectedCategory 
                ? "bg-sandy-ochre text-dark-chocolate" 
                : "bg-muted text-warning-amber hover:bg-muted/80"
            )}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-sm py-xs rounded-full text-body-sm font-medium transition-colors",
                selectedCategory === category 
                  ? "bg-sandy-ochre text-dark-chocolate" 
                  : "bg-muted text-warning-amber hover:bg-muted/80"
              )}
            >
              {category}
            </button>
          ))}
        </div>
      )}

      {/* FAQ Items */}
      {filteredFAQs.length > 0 ? (
        <Accordion type="single" collapsible className="w-full">
          {filteredFAQs.map((faq) => (
            <AccordionItem 
              key={faq.id} 
              value={faq.id}
              className={cn(
                variant === "card" && "bg-card border border-border rounded-sm px-md py-xs shadow-flat"
              )}
            >
              <AccordionTrigger className="text-left hover:no-underline py-base">
                <div className="flex items-start gap-sm w-full">
                  <div className="flex-1">
                    <h3 className="font-rajdhani font-semibold text-dark-chocolate leading-tight">
                      {faq.question}
                    </h3>
                    {faq.category && showCategories && (
                      <Badge 
                        variant="outline" 
                        className="mt-(--spacing-xs) bg-sandy-ochre/10 text-sandy-ochre border-sandy-ochre/20"
                      >
                        {faq.category}
                      </Badge>
                    )}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-warning-amber font-noto-sans leading-relaxed pb-(--spacing-base)">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="text-center py-16">
          <div className="p-sm bg-muted rounded-full w-fit mx-auto mb-4">
            <MagnifyingGlassIcon className="size-6 text-warning-amber" />
          </div>
          <h3 className="font-rajdhani font-semibold text-dark-chocolate mb-4">
            No FAQs Found
          </h3>
          <p className="text-warning-amber">
            Try adjusting your search or category filter to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  )
}
