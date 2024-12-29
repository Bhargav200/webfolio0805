import React from 'react';

interface ProjectTagsProps {
  tags: string[];
}

export function ProjectTags({ tags }: ProjectTagsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag, i) => (
        <span
          key={i}
          className="px-3 py-1 bg-dark text-primary text-sm rounded-full border border-primary/20"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}