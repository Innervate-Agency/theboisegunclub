"use client"

import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./accordion"
import { Badge } from "./badge"
import { Input } from "./input"
import { Search, HelpCircle } from "lucide-react"

const faqAccordionVariants = cva(
  "w-full",
  {
    variants: {
      variant: {
        default: "space-y-2",
        compact: "space-y-1",
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
      <div className="text-center mb-8">
        <div className="flex justify-center mb-4">
          <div className="p-3 bg-brass-yellow/10 rounded-full border border-brass-yellow/20">
            <HelpCircle className="h-6 w-6 text-brass-yellow" />
          </div>
        </div>
        
        <h2 className="text-2xl md:text-3xl font-rajdhani font-bold text-gunmetal-black mb-2">
          {title}
        </h2>
        
        {subtitle && (
          <p className="text-case-hardened font-noto-sans leading-relaxed max-w-2xl mx-auto">
            {subtitle}
          </p>
        )}
      </div>

      {/* Search */}
      {showSearch && (
        <div className="mb-6">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-case-hardened" />
            <Input
              type="text"
              placeholder="Search questions..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>
        </div>
      )}

      {/* Category Filters */}
      {showCategories && categories.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          <button
            onClick={() => setSelectedCategory(null)}
            className={cn(
              "px-3 py-1 rounded-full text-sm font-medium transition-colors",
              !selectedCategory 
                ? "bg-brass-yellow text-gunmetal-black" 
                : "bg-gray-100 text-case-hardened hover:bg-gray-200"
            )}
          >
            All Categories
          </button>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-3 py-1 rounded-full text-sm font-medium transition-colors",
                selectedCategory === category 
                  ? "bg-brass-yellow text-gunmetal-black" 
                  : "bg-gray-100 text-case-hardened hover:bg-gray-200"
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
                variant === "card" && "bg-card border border-border rounded-lg px-6 py-2 shadow-sm"
              )}
            >
              <AccordionTrigger className="text-left hover:no-underline py-4">
                <div className="flex items-start gap-3 w-full">
                  <div className="flex-1">
                    <h3 className="font-rajdhani font-semibold text-gunmetal-black leading-tight">
                      {faq.question}
                    </h3>
                    {faq.category && showCategories && (
                      <Badge 
                        variant="secondary" 
                        className="mt-2 bg-brass-yellow/10 text-brass-yellow border-brass-yellow/20"
                      >
                        {faq.category}
                      </Badge>
                    )}
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="text-case-hardened font-noto-sans leading-relaxed pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      ) : (
        <div className="text-center py-12">
          <div className="p-3 bg-gray-100 rounded-full w-fit mx-auto mb-4">
            <Search className="h-6 w-6 text-case-hardened" />
          </div>
          <h3 className="font-rajdhani font-semibold text-gunmetal-black mb-2">
            No FAQs Found
          </h3>
          <p className="text-case-hardened">
            Try adjusting your search or category filter to find what you're looking for.
          </p>
        </div>
      )}
    </div>
  )
}
