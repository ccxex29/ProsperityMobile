import React from 'react';
import CommonListBodyScrollable from '../CommonList/CommonListBodyScrollable';
import ScheduleItem from './ScheduleList.d/ScheduleItem';

const ScheduleListBody = () => {
    return (
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
                    },
                    {
                        courseName: 'Course Name Test 2 Wrapped Text Title',
                        courseCode: 'JSX002',
                        courseTime: '11:30',
                    },
                ]}
            />
            <ScheduleItem
                day={'Saturday'}
                date={'12'}
                month={'9'}
                year={'2020'}
                courseList={[
                    {
                        courseName: 'Course Name Test',
                        courseCode: 'JSX001',
                        courseTime: '10:00',
                    },
                    {
                        courseName: 'Course Name Test 2 Wrapped Text Title',
                        courseCode: 'JSX002',
                        courseTime: '11:30',
                    },
                ]}
            />
        </CommonListBodyScrollable>
    );
};

export default ScheduleListBody;
