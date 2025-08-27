'use client'

import React from 'react'
import { motion } from 'framer-motion'
import { BoltIcon, CurrencyDollarIcon, FireIcon, GiftIcon, ReceiptPercentIcon, ShoppingCartIcon, SparklesIcon, TagIcon } from '@heroicons/react/24/outline';

export function MarketplaceSparklesIcons() {
  const diamonds = [
    { icon: TagIcon, size: 48, x: '10%', y: '15%', duration: 22, delay: 0 },
    { icon: CurrencyDollarIcon, size: 36, x: '85%', y: '20%', duration: 28, delay: 2 },
    { icon: ShoppingCartIcon, size: 42, x: '75%', y: '75%', duration: 25, delay: 1 },
    { icon: SparklesIcon, size: 32, x: '15%', y: '65%', duration: 30, delay: 3 },
    { icon: BoltIcon, size: 38, x: '90%', y: '55%', duration: 26, delay: 1.5 },
    { icon: ReceiptPercentIcon, size: 44, x: '25%', y: '35%', duration: 24, delay: 2.5 },
    { icon: GiftIcon, size: 35, x: '60%', y: '80%', duration: 27, delay: 0.5 },
    { icon: FireIcon, size: 40, x: '45%', y: '10%', duration: 23, delay: 1.8 }
  ]

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {diamonds.map((diamond, index) => (
        <motion.div
          key={index}
          className="absolute opacity-[0.03]"
          style={{
            left: diamond.x,
            top: diamond.y,
          }}
          animate={{
            y: [0, -30, 0],
            rotate: [0, 180, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: diamond.duration,
            delay: diamond.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <diamond.icon 
            className="text-white"
            style={{ width: diamond.size, height: diamond.size }}
          />
        </motion.div>
      ))}
      
      {/* Subtle gradient orbs */}
      <motion.div
        className="absolute w-96 h-96 -top-48 -right-48 bg-nav-buysell/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
      <motion.div
        className="absolute w-96 h-96 -bottom-48 -left-48 bg-sandy-ochre/5 rounded-full blur-3xl"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.3, 0.4, 0.3],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 5,
        }}
      />
    </div>
  )
}