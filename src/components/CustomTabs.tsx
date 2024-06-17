import { Repeat, RectangleVertical } from 'lucide-react'
import { ReactNode } from 'react'

import { Card } from '@/components/ui/Card'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/Tabs'

interface Tab {
  value: string
  title: string
}

interface StyledTabsProps {
  tabs: Tab[]
  defaultTab: string
  children?: ReactNode
}

export function CustomTabs({ tabs, defaultTab, children }: StyledTabsProps) {
  return (
    <Tabs defaultValue={defaultTab} className='flex w-full gap-8 py-4'>
      <TabsList asChild className='mt-2 h-fit'>
        <Card className='flex w-80 min-w-60 flex-col'>
          {tabs.map(tab => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className='flex w-full justify-start py-3'
            >
              {tab.value === 'exchanges' ? (
                <Repeat className='mr-2 h-4 w-4' />
              ) : (
                <RectangleVertical className='mr-2 h-4 w-4' />
              )}
              {tab.title}
            </TabsTrigger>
          ))}
        </Card>
      </TabsList>
      {children}
    </Tabs>
  )
}
