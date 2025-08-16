import { Metadata } from 'next'
import { ResultsSubmissionForm } from '@/components/ui/results-submission-form'

export const metadata: Metadata = {
  title: 'Submit Event Results | Idaho Shooting Sports Archive',
  description: 'Submit competitive shooting event results to the Idaho Shooting Sports Archive. Help build the most comprehensive shooting sports database in the Treasure Valley.',
}

export default function SubmitResultsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-nav-events-hero px-md py-xl">
        <div className="container mx-auto max-w-site relative z-10">
          <div className="text-center space-y-lg max-w-3xl mx-auto">
            <h1 className="font-rajdhani text-display-lg md:text-display-xl font-bold text-card-foreground leading-tight">
              Submit Event Results
            </h1>
            
            <p className="text-heading-base text-muted-foreground leading-relaxed">
              Help us build Idaho's most comprehensive shooting sports archive. 
              Submit results from recent matches or historical events to preserve our community's achievements.
            </p>

            <div className="flex flex-wrap gap-sm justify-center text-body-sm text-muted-foreground">
              <span>• USPSA Matches</span>
              <span>• IDPA Events</span>
              <span>• Steel Challenge</span>
              <span>• 3-Gun Competitions</span>
              <span>• Local Club Matches</span>
            </div>
          </div>
        </div>

        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 border-2 border-current rounded-full" />
          <div className="absolute top-3/4 right-1/4 w-24 h-24 border-2 border-current rotate-45" />
          <div className="absolute bottom-1/4 left-1/3 w-28 h-28 border-2 border-current" />
        </div>
      </section>

      {/* Form Section */}
      <section className="py-4xl">
        <div className="container mx-auto max-w-4xl px-md">
          <ResultsSubmissionForm />
        </div>
      </section>
    </div>
  )
}