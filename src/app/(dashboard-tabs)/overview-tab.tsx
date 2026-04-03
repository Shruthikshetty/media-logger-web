import { TabsContent } from '../../components/ui/tabs';
import StatCard from '../../components/stat-card';
import LoginPlaceholder from '../../components/login-placeholder';
import { Clock, Film, Gamepad, Star, TrendingUp, Tv } from 'lucide-react';
import MyCollectionCard from '../../components/my-collection-card';
import MediaLinkCard from '../../components/media-link-card';
import { OVERVIEW_QUICK_LINKS } from '@/src/constants/screen.constants';

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
      iconStyles: 'text-purple-500',
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
      description: '+97 this month',
      statNumber: 22,
      icon: TrendingUp,
      iconStyles: 'text-pink-400',
    },
  ];
  // fetch dashboard stats
  return (
    <TabsContent
      value={'overview'}
      className="flex w-full flex-col gap-5 px-5 py-4"
    >
      {/* stats card */}
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
      {/* my collection card */}
      <LoginPlaceholder message="Login to check your collection">
        {/* @TODO yet to implement */}
        <MyCollectionCard href={'/'} />
      </LoginPlaceholder>
      {/* quick link cards */}
      <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
        {OVERVIEW_QUICK_LINKS.map((link) => (
          <MediaLinkCard
            key={link.title}
            href={link.href}
            title={link.title}
            description={link.description}
          />
        ))}
      </div>
    </TabsContent>
  );
};

export default OverviewTab;
