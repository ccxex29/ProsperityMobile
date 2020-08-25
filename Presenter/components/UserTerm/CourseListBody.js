import React from 'react';
import CommonListBodyScrollable from '../CommonList/CommonListBodyScrollable';
import CourseItem from './CourseList.d/CourseItem';

const CourseListBody = () => {
    return (
        <CommonListBodyScrollable>
            <CourseItem
                courseName={'SOMEWHAT UNLIKELY AND LENGTHY COURSE NAME UWU'}
                Tags={[
                    {
                        tagValue: 'ABC0123',
                        backgroundColor: '#63BECF',
                    },
                    {
                        tagValue: 'DEF0123',
                        backgroundColor: '#67898F',
                    },
                    {
                        tagValue: 'DEF0123',
                        backgroundColor: '#67898F',
                    },
                    {
                        tagValue: 'DEF0123',
                        backgroundColor: '#67898F',
                    },
                    {
                        tagValue: 'DEF0123',
                        backgroundColor: '#67898F',
                    },
                ]}
                Scores={[
                    {
                        scoreName: 'Score 1',
                        scoreValue: 60,
                    },
                    {
                        scoreName: 'Score 2',
                        scoreValue: 60,
                    },
                    {
                        scoreName: 'Score 3',
                        scoreValue: 60,
                    },
                ]}
                numberGrade={ parseFloat(6).toFixed(1).toString() }
                letterGrade={'A'}
            />
            <CourseItem
                courseName={'SOMEWHAT UNLIKELY AND LENGTHY COURSE NAME UWU'}
                Tags={[
                    {
                        tagValue: 'ABC0123',
                        backgroundColor: '#63BECF',
                    },
                    {
                        tagValue: 'DEF0123',
                        backgroundColor: '#67898F',
                    },
                ]}
                Scores={[
                    {
                        scoreName: 'Score 1',
                        scoreValue: 60,
                    },
                    {
                        scoreName: 'Score 2',
                        scoreValue: 60,
                    },
                    {
                        scoreName: 'Score 3',
                        scoreValue: 60,
                    },
                ]}
                numberGrade={ parseFloat(6).toFixed(1).toString() }
                letterGrade={'B'}
            />
            <CourseItem
                courseName={'SOMEWHAT UNLIKELY AND LENGTHY COURSE NAME UWU'}
                Tags={[
                    {
                        tagValue: 'ABC0123',
                        backgroundColor: '#63BECF',
                    },
                    {
                        tagValue: 'DEF0123',
                        backgroundColor: '#67898F',
                    },
                ]}
                Scores={[
                    {
                        scoreName: 'Score 1',
                        scoreValue: 60,
                    },
                    {
                        scoreName: 'Score 2',
                        scoreValue: 60,
                    },
                    {
                        scoreName: 'Score 3',
                        scoreValue: 60,
                    },
                ]}
                numberGrade={ parseFloat(6).toFixed(1).toString() }
                letterGrade={'C'}
            />
            <CourseItem
                courseName={'SOMEWHAT UNLIKELY AND LENGTHY COURSE NAME UWU'}
                Tags={[
                    {
                        tagValue: 'ABC0123',
                        backgroundColor: '#63BECF',
                    },
                    {
                        tagValue: 'DEF0123',
                        backgroundColor: '#67898F',
                    },
                ]}
                Scores={[
                    {
                        scoreName: 'Score 1',
                        scoreValue: 60,
                    },
                    {
                        scoreName: 'Score 2',
                        scoreValue: 60,
                    },
                    {
                        scoreName: 'Score 3',
                        scoreValue: 60,
                    },
                ]}
                numberGrade={ parseFloat(6).toFixed(1).toString() }
                letterGrade={'D'}
            />
            <CourseItem
                courseName={'SOMEWHAT UNLIKELY AND LENGTHY COURSE NAME UWU'}
                Tags={[
                    {
                        tagValue: 'ABC0123',
                        backgroundColor: '#63BECF',
                    },
                    {
                        tagValue: 'DEF0123',
                        backgroundColor: '#67898F',
                    },
                ]}
                Scores={[
                    {
                        scoreName: 'Score 1',
                        scoreValue: 60,
                    },
                    {
                        scoreName: 'Score 2',
                        scoreValue: 60,
                    },
                    {
                        scoreName: 'Score 3',
                        scoreValue: 60,
                    },
                ]}
                numberGrade={ parseFloat(6).toFixed(1).toString() }
                letterGrade={'E'}
            />
            <CourseItem
                courseName={'SOMEWHAT UNLIKELY AND LENGTHY COURSE NAME UWU'}
                Tags={[
                    {
                        tagValue: 'ABC0123',
                        backgroundColor: '#63BECF',
                    },
                    {
                        tagValue: 'DEF0123',
                        backgroundColor: '#67898F',
                    },
                ]}
                Scores={[
                    {
                        scoreName: 'Score 1',
                        scoreValue: 60,
                    },
                    {
                        scoreName: 'Score 2',
                        scoreValue: 60,
                    },
                    {
                        scoreName: 'Score 3',
                        scoreValue: 60,
                    },
                ]}
                numberGrade={ parseFloat(6).toFixed(1).toString() }
                letterGrade={'F'}
            />
        </CommonListBodyScrollable>
    );
};

export default CourseListBody;
