import { TabsContent } from '../ui/tabs';
import StatCard from '../stat-card';
import LoginPlaceholder from '../login-placeholder';

/**
 * this contains the content of overview tab used in the dashboard page
 * @returns OverviewTab component
 */
const OverviewTab = () => {
  // fetch dashboard stats
  return (
    <TabsContent value={'overview'} className="w-full px-5 py-4">
      <LoginPlaceholder message="Login to check your stats">
        <div className="grid w-full grid-cols-1 gap-3">
          <StatCard title={'wdw'} description={'wdw'} statNumber={22} />
          <StatCard title={'wdw'} description={'wdw'} statNumber={22} />
          <StatCard title={'wdw'} description={'wdw'} statNumber={22} />
          <StatCard title={'wdw'} description={'wdw'} statNumber={22} />
        </div>
      </LoginPlaceholder>
    </TabsContent>
  );
};

export default OverviewTab;
