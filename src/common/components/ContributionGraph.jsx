import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import './ContributionGraph.css';

const ContributionGraph = () => {
  const [contributions, setContributions] = useState([]);
  const [hoveredDay, setHoveredDay] = useState(null);

  useEffect(() => {
    // Generate contribution data for the past year (52 weeks)
    const generateContributions = () => {
      const data = [];
      const today = new Date();
      const oneYearAgo = new Date(today.getFullYear() - 1, today.getMonth(), today.getDate());
      
      // Calculate the number of days
      const daysDiff = Math.floor((today - oneYearAgo) / (1000 * 60 * 60 * 24));
      
      for (let i = 0; i < daysDiff; i++) {
        const date = new Date(oneYearAgo);
        date.setDate(date.getDate() + i);
        
        // Generate semi-realistic contribution patterns
        const dayOfWeek = date.getDay();
        const isWeekend = dayOfWeek === 0 || dayOfWeek === 6;
        
        // Less activity on weekends, more on weekdays
        const baseContributions = isWeekend 
          ? Math.floor(Math.random() * 3)
          : Math.floor(Math.random() * 15);
        
        // Add some variety
        const contributions = Math.random() > 0.3 ? baseContributions : 0;
        
        data.push({
          date: date.toISOString().split('T')[0],
          count: contributions,
          level: getLevel(contributions)
        });
      }
      
      return data;
    };
    
    setContributions(generateContributions());
  }, []);

  const getLevel = (count) => {
    if (count === 0) return 0;
    if (count < 3) return 1;
    if (count < 6) return 2;
    if (count < 10) return 3;
    return 4;
  };

  const getTotalContributions = () => {
    return contributions.reduce((sum, day) => sum + day.count, 0);
  };

  const getCurrentStreak = () => {
    let streak = 0;
    for (let i = contributions.length - 1; i >= 0; i--) {
      if (contributions[i].count > 0) {
        streak++;
      } else if (streak > 0) {
        break;
      }
    }
    return streak;
  };

  // Group contributions by week
  const getWeeks = () => {
    const weeks = [];
    let week = [];
    
    contributions.forEach((day, index) => {
      const date = new Date(day.date);
      const dayOfWeek = date.getDay();
      
      if (index === 0 && dayOfWeek !== 0) {
        // Fill in the beginning of the first week with empty days
        for (let i = 0; i < dayOfWeek; i++) {
          week.push(null);
        }
      }
      
      week.push(day);
      
      if (dayOfWeek === 6 || index === contributions.length - 1) {
        weeks.push(week);
        week = [];
      }
    });
    
    return weeks;
  };

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return (
    <section className="contribution-graph-section gh-section" id="activity">
      <div className="gh-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="gh-heading" style={{ fontSize: '24px', marginBottom: '24px' }}>
            Contribution Activity
          </h2>
          
          <div className="contribution-stats">
            <div className="stat-item">
              <span className="stat-value">{getTotalContributions()}</span>
              <span className="stat-label">contributions in the last year</span>
            </div>
            <div className="stat-item">
              <span className="stat-value">{getCurrentStreak()}</span>
              <span className="stat-label">day current streak</span>
            </div>
          </div>

          <div className="contribution-graph-container">
            <div className="graph-wrapper">
              {/* Day labels */}
              <div className="day-labels">
                {['Mon', 'Wed', 'Fri'].map((day, index) => (
                  <div key={day} className="day-label" style={{ gridRow: index * 2 + 2 }}>
                    {day}
                  </div>
                ))}
              </div>

              {/* Contribution grid */}
              <div className="contribution-grid">
                {getWeeks().map((week, weekIndex) => (
                  <div key={weekIndex} className="contribution-week">
                    {week.map((day, dayIndex) => (
                      <motion.div
                        key={day ? day.date : `empty-${dayIndex}`}
                        className={`contribution-day ${day ? `level-${day.level}` : 'empty'}`}
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: weekIndex * 0.01 + dayIndex * 0.005 }}
                        onMouseEnter={() => day && setHoveredDay(day)}
                        onMouseLeave={() => setHoveredDay(null)}
                        whileHover={{ scale: day ? 1.3 : 1 }}
                      />
                    ))}
                  </div>
                ))}
              </div>
            </div>

            {/* Tooltip */}
            {hoveredDay && (
              <motion.div
                className="contribution-tooltip"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                <strong>{hoveredDay.count} contributions</strong> on {hoveredDay.date}
              </motion.div>
            )}

            {/* Legend */}
            <div className="contribution-legend">
              <span className="legend-label">Less</span>
              {[0, 1, 2, 3, 4].map((level) => (
                <div key={level} className={`legend-box level-${level}`} />
              ))}
              <span className="legend-label">More</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContributionGraph;
