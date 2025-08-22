'use client'

import * as React from 'react'
import { CheckCircleIcon } from '@heroicons/react/24/outline';
import { cn } from '@/lib/utils'

interface VerificationStatusProps {
  isVerified: boolean
  verificationStatus?: string
  className?: string
}

export function VerificationStatus({ 
  isVerified, 
  verificationStatus = "Verified", 
  className 
}: VerificationStatusProps) {
  if (!isVerified) return null

  return (
    <div className={cn(
      "inline-flex items-center gap-xs text-sagebrush-green font-rajdhani font-semibold text-sm",
      className
    )}>
      <CheckCircleIcon className="h-4 w-4" />
      <span>✓ {verificationStatus}</span>
    </div>
  )
}