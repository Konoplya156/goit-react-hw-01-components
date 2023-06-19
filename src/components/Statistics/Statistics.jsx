import { StatisticsWrapper, Title } from './Statistics.styled';
import { StatisticsList } from './StatisticsList/StatisticsList';

export const Statistics = ({ upcomingData, title }) => {
  return (
    <StatisticsWrapper>
      {title && <Title>{title}</Title>}
      <StatisticsList data={upcomingData} />
    </StatisticsWrapper>
  );
};
