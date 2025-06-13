import React from 'react';

interface SectionTitleProps {
  title: string;
}

const SectionTitle = ({ title }: SectionTitleProps) => {
  return (
    <h2 className="text-3xl font-bold text-white mb-12">{title}</h2>
  );
};

export default SectionTitle;