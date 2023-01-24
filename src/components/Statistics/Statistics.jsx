import PropTypes from 'prop-types';
import {StatisticsSection, Title, StatList, StatsItem, StatsLabel, StatsPercentage} from './Statistics.styled';


export const Statistics = ({ title, stats }) => {
    return (
    <StatisticsSection>
        {!!title  && (<Title>{title}</Title>)}
        
        <StatList>
                    {stats.map(stat => (
            <StatsItem key={stat.id} count={stats.length}>
            <StatsLabel>{stat.label}</StatsLabel>
            <StatsPercentage>{stat.percentage}</StatsPercentage>
                        </StatsItem>
                    ))}
        </StatList>
                
</StatisticsSection>
    );
};

Statistics.propTypes = {
    title: PropTypes.any,
    stats: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            label: PropTypes.string.isRequired,
            percentage: PropTypes.number.isRequired,
        })
    ).isRequired,
}


// [
//   { "id": "id-1", "label": ".docx", "percentage": 22 },
//   { "id": "id-2", "label": ".pdf", "percentage": 4 },
//   { "id": "id-3", "label": ".mp3", "percentage": 17 },
//   { "id": "id-4", "label": ".psd", "percentage": 47 },
//   { "id": "id-5", "label": ".pdf", "percentage": 10 }
// ]
