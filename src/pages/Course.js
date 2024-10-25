import React from 'react';
import { useParams } from 'react-router-dom';
import courses from '../pages/courses';

const Course = () => {
  const { courseId } = useParams();
  const course = courses.find(c => c.id === courseId);

  return (
    <div className="course">
      <h1>{course.title}</h1>
      <h2>Autor: {course.author}</h2>
      <h3>Duração: {course.duration}</h3>
      <h4>Módulos:</h4>
      {course.modules.map((module, index) => (
        <div key={index}>
          <h5>{module.title}</h5>
          <ul>
            {module.lessons.map((lesson, i) => (
              <li key={i}>{lesson.title}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Course;
