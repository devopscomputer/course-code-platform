import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../data/courses';

const Lesson = () => {
  const { courseId, lessonIndex } = useParams();
  const course = courses.find(c => c.id === courseId);
  const lesson = course.modules[lessonIndex];

  return (
    <div className="lesson">
      <h1>{lesson.title}</h1>
      <p>{lesson.content}</p>
    </div>
  );
};

export default Lesson;
