'use client';

import React, { useState } from 'react';
import { Button } from '@/components/base/ui/button';
import Header from '@/components/Header';
import { cn } from '@/lib/utils';
import { ChevronDown } from 'lucide-react';
import AnimatedDrawer from '@/components/base/AnimatedDrawer';
import { Tabs, TabsList, TabsTrigger } from '@/components/base/ui/tabs';

const Heading = ({ text }: { text: string }) => (
  <div className="text-zinc-900 text-lg font-semibold leading-[30px]">
    {text}
  </div>
);

const Card = ({
  title,
  stats,
  iconSrc,
  showProgressBar = false,
  onClick = () => {},
}: {
  title: string;
  stats: string;
  iconSrc: string;
  showProgressBar?: boolean;
  onClick?: () => void;
}) => (
  <div
    className="col-span-1 p-4 bg-white rounded-lg border border-zinc-200 flex justify-center items-center gap-3 cursor-pointer"
    onClick={onClick}
  >
    <img className="w-6 h-6" src={iconSrc} />
    <div className="flex-1 flex flex-col justify-start items-start">
      <div className="text-sm font-semibold leading-tight">{title}</div>
      <div
        className={cn(
          'text-sm font-normal leading-tight pt-1',
          showProgressBar && 'pb-2'
        )}
      >
        {stats}
      </div>
      {showProgressBar && (
        <div className="relative w-full h-1.5 bg-zinc-200 rounded-[64px]">
          <div className="absolute top-0 h-full w-[60%] bg-[#17374e] rounded-[64px]" />
        </div>
      )}
    </div>
  </div>
);

const TaskItem = ({
  task,
}: {
  task: { id: string; title: string; iconSrc: string; isAlert?: boolean };
}) => (
  <div
    className={cn(
      'px-2 py-2.5 flex justify-between items-center transition-all rounded cursor-pointer',
      task.isAlert ? 'bg-[#FEF2F2]' : 'hover:bg-[#FAFAFA]'
    )}
  >
    <div className="flex-1 flex justify-start items-center gap-2">
      <img className="w-4 h-4" src={task.iconSrc} />
      <div className="flex flex-col justify-center items-start gap-1">
        <div className="text-zinc-900 text-sm font-normal leading-tight">
          {task.title}
        </div>
      </div>
    </div>
    <div className="flex items-center gap-2">
      {task.isAlert && (
        <div className="h-2.5 w-2.5 rounded-full bg-[#F1512D]" />
      )}
      <img className="w-6 h-6" src="/assets/icons/arrowRight.svg" />
    </div>
  </div>
);

const DEMO_TASKS = [
  {
    id: 'task-1',
    title: 'Call Michael Moll',
    iconSrc: '/assets/icons/phone.svg',
    isAlert: true,
  },
  {
    id: 'task-2',
    title: 'Call Genevieve Petterson',
    iconSrc: '/assets/icons/phone.svg',
    isAlert: false,
  },
  {
    id: 'task-3',
    title: 'Meeting with developers',
    iconSrc: '/assets/icons/calendarBlank.svg',
    isAlert: false,
  },
  {
    id: 'task-4',
    title: 'Send legal documents to Jill Faldner',
    iconSrc: '/assets/icons/envelopeSimple.svg',
    isAlert: false,
  },
];

const DUMMY_LEADS = [
  {
    firstName: 'Anthony',
    lastName: 'Rogers',
    date: '2024-07-16',
    role: 'Agent',
    leadSource: 'Unknown',
  },
  {
    firstName: 'Anthony',
    lastName: 'Rogers',
    date: '2024-07-16',
    role: 'Agent',
    leadSource: 'Unknown',
  },
  {
    firstName: 'Anthony',
    lastName: 'Rogers',
    date: '2024-07-16',
    role: 'Agent',
    leadSource: 'Unknown',
  },
  {
    firstName: 'Anthony',
    lastName: 'Rogers',
    date: '2024-07-16',
    role: 'Agent',
    leadSource: 'Unknown',
  },
  {
    firstName: 'Anthony',
    lastName: 'Rogers',
    date: '2024-07-16',
    role: 'Agent',
    leadSource: 'Unknown',
  },
  {
    firstName: 'Anthony',
    lastName: 'Rogers',
    date: '2024-07-16',
    role: 'Agent',
    leadSource: 'Unknown',
  },
];

const DUMMY_ACTIVITIES = [
  {
    count: 9,
    title: 'Tasks',
  },
  {
    count: 21,
    title: 'Calls',
  },
  {
    count: 7,
    title: 'Emails',
  },
  {
    count: 0,
    title: 'Meetings',
  },
  {
    count: 0,
    title: 'Meetings',
  },
];

export default function Home() {
  const [isLeadsDrawerOpen, setIsLeadsDrawerOpen] = useState<boolean>(false);
  const [isWeeklyGoalDrawerOpen, setIsWeeklyGoalDrawerOpen] =
    useState<boolean>(false);

  return (
    <section className="w-full h-full flex flex-col items-center justify-between bg-[#17374e] overflow-hidden">
      <Header />
      <div className="w-full flex-1 p-4 py-6 rounded-t-2xl bg-white flex flex-col gap-8 overflow-y-auto">
        <div className="col-span-1 w-full text-zinc-900 grid grid-cols-2 gap-4">
          <Card
            title="Your new leads"
            stats="+6 contacts"
            iconSrc="/assets/icons/userCirclePlus.svg"
            onClick={() => setIsLeadsDrawerOpen(true)}
          />
          <Card
            title="Weekly goal"
            stats="42%"
            iconSrc="/assets/icons/target.svg"
            showProgressBar
            onClick={() => setIsWeeklyGoalDrawerOpen(true)}
          />
        </div>
        <div>
          <Heading text="Today’s tasks" />
          <div className="flex flex-col mt-3.5">
            {DEMO_TASKS.map((task) => (
              <TaskItem key={task.id} task={task} />
            ))}
          </div>
          <Button variant="outline" className="w-full">
            View all tasks
          </Button>
        </div>
        <div className="mt-4">
          <div className="flex justify-between items-center mb-4">
            <Heading text="Team pipeline" />
            <div className="w-36 px-3 py-2.5 bg-white rounded-md border border-zinc-200 flex justify-between items-center cursor-pointer">
              <div className="text-zinc-900 text-sm font-medium leading-tight">
                All time
              </div>
              <ChevronDown className="w-4 h-4 text-[#94A3B8]" />
            </div>
          </div>
          <div>Chart-pending</div>
        </div>
        <AnimatedDrawer
          open={isLeadsDrawerOpen}
          onOpenChange={setIsLeadsDrawerOpen}
          isHideOverlay
          isHideCloseIcon
        >
          <div className="w-full flex flex-col gap-4">
            <div className="flex items-center gap-2">
              <img
                className="w-6 h-6 rotate-180 cursor-pointer"
                src="/assets/icons/arrowRight.svg"
                onClick={() => setIsLeadsDrawerOpen(false)}
              />
              <Heading text="Your new leads (6)" />
            </div>
            <Tabs defaultValue="account">
              <TabsList className="w-full grid grid-cols-3">
                <TabsTrigger value="all" className="focus-visible:ring-0">
                  All
                </TabsTrigger>
                <TabsTrigger value="buyer" className="focus-visible:ring-0">
                  Buyer
                </TabsTrigger>
                <TabsTrigger value="agent" className="focus-visible:ring-0">
                  Agent
                </TabsTrigger>
              </TabsList>
            </Tabs>
            <div>
              {DUMMY_LEADS.map((lead, index) => (
                <div
                  key={index}
                  className={cn(
                    'w-full px-2 py-2.5 flex justify-between items-center',
                    (index + 1) % 2 === 0 && 'bg-[#FAFAFA]'
                  )}
                >
                  <div className="justify-start items-center gap-2 flex">
                    <div className="p-2 bg-zinc-900 rounded-[48px] flex flex-col justify-center items-center gap-2">
                      <div className="text-gray-100 text-sm font-semibold leading-tight uppercase">
                        {lead.firstName[0]}
                        {lead.lastName[0]}
                      </div>
                    </div>
                    <div className="flex flex-col justify-center items-start gap-0.5">
                      <div className="text-zinc-950 text-sm font-semibold leading-tight">
                        {lead.firstName} {lead.lastName}
                      </div>
                      <div className="text-zinc-500 text-xs font-normal leading-none">
                        {lead.role}
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-start items-center gap-2">
                    <div className="flex flex-col justify-center items-end  gap-1">
                      <div className="text-zinc-500 text-xs font-normal leading-none">
                        {lead.date}
                      </div>
                      <div className="text-zinc-500 text-xs font-normal leading-none">
                        {lead.leadSource}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <Button variant="outline" className="w-full">
              View all contacts
            </Button>
          </div>
        </AnimatedDrawer>
        <AnimatedDrawer
          open={isWeeklyGoalDrawerOpen}
          onOpenChange={setIsWeeklyGoalDrawerOpen}
          isHideOverlay
          isHideCloseIcon
        >
          <div className="w-full h-full flex flex-col gap-8 overflow-hidden">
            <div className="flex items-center gap-2">
              <img
                className="w-6 h-6 rotate-180 cursor-pointer"
                src="/assets/icons/arrowRight.svg"
                onClick={() => setIsWeeklyGoalDrawerOpen(false)}
              />
              <div>
                <Heading text="Weekly Stats" />
                <p className="text-zinc-500 text-xs font-normal leading-none">
                  Jul 22 2024 - Jul 15 2024
                </p>
              </div>
            </div>
            <div className="flex-1 flex flex-col gap-2 overflow-y-auto">
              <div className="text-zinc-900 text-base font-semibold leading-normal">
                Weekly Goal
              </div>
              <div className="p-4 bg-zinc-100 rounded-lg flex justify-start items-start gap-3">
                <img className="w-6 h-6" src="/assets/icons/target.svg" />
                <div className="flex flex-col justify-start items-start gap-1">
                  <div className="self-stretch text-zinc-900 text-sm font-semibold leading-tight">
                    First sales rep to call 25 new leads
                  </div>
                  <div className="self-stretch text-zinc-900 text-xs font-normal leading-none">
                    Reward: $1,000 cash bonus
                  </div>
                </div>
              </div>
              <div className="pt-4 flex flex-col">
                <div className="text-zinc-900 text-base font-semibold leading-normal">
                  Leaderboard
                </div>
                <div className="flex flex-col">
                  <div className="p-2 justify-between items-center inline-flex">
                    <div className="h-9 w-[80%] bg-zinc-200 rounded-[100px] justify-start items-center gap-2 flex">
                      <div className="h-9 p-2 bg-zinc-900 rounded-[48px] flex-col justify-center items-center gap-2 inline-flex">
                        <div className="text-gray-100 text-sm font-semibold leading-tight">
                          SC
                        </div>
                      </div>
                      <div className="flex-col justify-center items-start inline-flex">
                        <div className="text-zinc-950 text-sm font-semibold leading-tight">
                          Sasha Coen
                        </div>
                      </div>
                    </div>
                    <div className="justify-start items-center gap-2 flex">
                      <div className="flex-col justify-center items-end inline-flex">
                        <div className="text-zinc-500 text-xs font-normal leading-none">
                          21
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 justify-between items-center inline-flex">
                    <div className="h-9 w-[70%] bg-zinc-200 rounded-[100px] justify-start items-center gap-2 flex">
                      <div className="h-9 p-2 bg-zinc-900 rounded-[48px] flex-col justify-center items-center gap-2 inline-flex">
                        <div className="text-gray-100 text-sm font-semibold leading-tight">
                          SC
                        </div>
                      </div>
                      <div className="flex-col justify-center items-start inline-flex">
                        <div className="text-zinc-950 text-sm font-semibold leading-tight">
                          Sasha Coen
                        </div>
                      </div>
                    </div>
                    <div className="justify-start items-center gap-2 flex">
                      <div className="flex-col justify-center items-end inline-flex">
                        <div className="text-zinc-500 text-xs font-normal leading-none">
                          21
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="p-2 justify-between items-center inline-flex">
                    <div className="h-9 w-[60%] bg-zinc-200 rounded-[100px] justify-start items-center gap-2 flex">
                      <div className="h-9 p-2 bg-zinc-900 rounded-[48px] flex-col justify-center items-center gap-2 inline-flex">
                        <div className="text-gray-100 text-sm font-semibold leading-tight">
                          SC
                        </div>
                      </div>
                      <div className="flex-col justify-center items-start inline-flex">
                        <div className="text-zinc-950 text-sm font-semibold leading-tight">
                          Sasha Coen
                        </div>
                      </div>
                    </div>
                    <div className="justify-start items-center gap-2 flex">
                      <div className="flex-col justify-center items-end inline-flex">
                        <div className="text-zinc-500 text-xs font-normal leading-none">
                          21
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-zinc-900 text-base font-semibold leading-normal">
                  Your Activity
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {DUMMY_ACTIVITIES.map((activity, index) => (
                    <div
                      key={index}
                      className="col-span-1 h-[72px] p-2 bg-zinc-100 rounded-lg flex flex-col justify-center items-start gap-1"
                    >
                      <div className="text-zinc-900 text-sm font-semibold leading-tight">
                        {activity.count}
                      </div>
                      <div className="text-zinc-900 text-xs font-normal leading-none">
                        {activity.title}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </AnimatedDrawer>
      </div>
    </section>
  );
}
