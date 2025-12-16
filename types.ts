import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface StepData {
  id: number;
  title: string;
  shortTitle: string;
  description: string;
  icon: LucideIcon;
  details: React.ReactNode;
  tips?: string[];
}