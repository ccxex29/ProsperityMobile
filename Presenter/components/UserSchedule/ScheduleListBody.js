import React, { useState } from 'react';
import CommonListBodyScrollable from '../CommonList/CommonListBodyScrollable';
import ScheduleItem from './ScheduleList.d/ScheduleItem';
import EmptySchedule from './EmptySchedule';

const ScheduleListBody = () => {
    const [simulateEmptySchedule, setSimulateEmptySchedule] = useState(false);
    return (
            simulateEmptySchedule ?
                <EmptySchedule />
            :
                <CommonListBodyScrollable>
                            <ScheduleItem
                                day={'Thursday'}
                                date={'10'}
                                month={'9'}
                                year={'2020'}
                                courseList={[
                                    {
                                        courseName: 'Course Name Test',
                                        courseCode: 'JSX001',
                                        courseTime: '10:00',
                                        key: 1,
                                    },
                                    {
                                        courseName: 'Course Name Test 2 Wrapped Text Title',
                                        courseCode: 'JSX002',
                                        courseTime: '11:30',
                                        key: 2,
                                    },
                                ]}
                            />
                </CommonListBodyScrollable>
    );
};

export default ScheduleListBody;
