import { TabsContent } from '../ui/tabs';
import StatCard from '../stat-card';
import LoginPlaceholder from '../login-placeholder';
import { Clock, Film, Gamepad, Star, TrendingUp, Tv } from 'lucide-react';

/**
 * this contains the content of overview tab used in the dashboard page
 * @returns OverviewTab component
 */
const OverviewTab = () => {
  //@TODO data will be populated from the api
  const overviewStats = [
    {
      title: 'Games Played',
      description: '+3 this month',
      statNumber: 22,
      icon: Gamepad,
      iconStyles: 'text-green-500',
    },
    {
      title: 'Movies Watched',
      description: '+3 this month',
      statNumber: 22,
      icon: Film,
      iconStyles: 'text-blue-500',
    },
    {
      title: 'TV Shows',
      description: '+3 this month',
      statNumber: 22,
      icon: Tv,
      iconStyles: 'text-purple-400',
    },
    {
      title: 'Hours Logged',
      description: '+3 this month',
      statNumber: 22,
      icon: Clock,
      iconStyles: 'text-orange-400',
    },
    {
      title: 'Avg Rating',
      description: '+3 this month',
      statNumber: 22,
      icon: Star,
      iconStyles: 'text-yellow-400',
    },
    {
      title: 'Completion Rate',
      description: 'wdw',
      statNumber: 22,
      icon: TrendingUp,
      iconStyles: 'text-pink-400',
    },
  ];
  // fetch dashboard stats
  return (
    <TabsContent value={'overview'} className="w-full px-5 py-4">
      <LoginPlaceholder message="Login to check your stats">
        <div className="grid w-full grid-cols-1 justify-center gap-3 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {overviewStats.map((stat) => (
            <StatCard
              key={stat.title}
              title={stat.title}
              description={stat.description}
              statNumber={stat.statNumber}
              Icon={stat?.icon}
              iconStyles={stat?.iconStyles}
            />
          ))}
        </div>
      </LoginPlaceholder>
    </TabsContent>
  );
};

export default OverviewTab;
