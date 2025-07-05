"use client"

import { useState } from "react"

export function PlateEditor() {
  const [content] = useState(`
    <h2>Two Sum</h2>
    
    <p>Given an array of integers <code>nums</code> and an integer <code>target</code>, return <em>indices of the two numbers such that they add up to <code>target</code></em>.</p>
    
    <p>You may assume that each input would have <strong>exactly one solution</strong>, and you may not use the same element twice.</p>
    
    <p>You can return the answer in any order.</p>
    
    <h3>Example 1:</h3>
    <pre><strong>Input:</strong> nums = [2,7,11,15], target = 9
<strong>Output:</strong> [0,1]
<strong>Explanation:</strong> Because nums[0] + nums[1] == 9, we return [0, 1].</pre>
    
    <h3>Example 2:</h3>
    <pre><strong>Input:</strong> nums = [3,2,4], target = 6
<strong>Output:</strong> [1,2]</pre>
    
    <h3>Example 3:</h3>
    <pre><strong>Input:</strong> nums = [3,3], target = 6
<strong>Output:</strong> [0,1]</pre>
    
    <h3>Constraints:</h3>
    <ul>
      <li><code>2 <= nums.length <= 10<sup>4</sup></code></li>
      <li><code>-10<sup>9</sup> <= nums[i] <= 10<sup>9</sup></code></li>
      <li><code>-10<sup>9</sup> <= target <= 10<sup>9</sup></code></li>
      <li><strong>Only one valid answer exists.</strong></li>
    </ul>
    
    <p><strong>Follow-up:</strong> Can you come up with an algorithm that is less than <code>O(n<sup>2</sup>)</code> time complexity?</p>
  `)

  return (
    <div className="prose prose-sm max-w-none">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  )
}
