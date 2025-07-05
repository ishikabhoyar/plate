"use client"

import { useState, useEffect } from "react"
import { useTheme } from "next-themes"

export function CodeEditor() {
  const [code, setCode] = useState(`/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    // Write your solution here
    
};`)

  const [mounted, setMounted] = useState(false)
  const { theme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <div className="h-full bg-black text-white">
      <div className="p-4 h-full">
        <textarea
          value={code}
          onChange={(e) => setCode(e.target.value)}
          className="w-full h-full bg-transparent border-none outline-none resize-none font-mono text-sm leading-6 text-white placeholder-gray-400"
          style={{
            fontFamily: 'Monaco, Menlo, "Ubuntu Mono", monospace',
            tabSize: 2,
          }}
          spellCheck={false}
        />
      </div>
    </div>
  )
}
