import React from 'react';
import styled from 'styled-components';
import { FaPlayCircle, FaCalendarAlt } from 'react-icons/fa'; // Ícones de play e calendário
import { Link } from 'react-router-dom'; // Importando Link para navegação

// Container principal da página
const HomeContainer = styled.div`
  padding: 20px;
  background-color: #f2f6fc;
  min-height: 100vh;
  font-family: 'Roboto', sans-serif;
`;

// Estilização do cabeçalho
const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 20px;
  color: white;
`;

const Logo = styled.div`
  font-size: 24px;
  font-weight: bold;
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
`;

const UserName = styled.div`
  margin-left: 10px;
`;

// Estilização dos cursos
const CourseSection = styled.div`
  margin-top: 20px;
`;

const CourseTitle = styled.h2`
  font-size: 24px;
  color: #333;
  font-weight: 600;
  color: #1b2a47;
`;

const CoursesWrapper = styled.div`
  display: flex;
  gap: 15px;
  margin-top: 10px;
`;

const CourseCard = styled.div`
  background-color: ${props => props.bgColor || "#fff"};
  border-radius: 10px;
  padding: 20px;
  width: 200px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  color: white;
  position: relative;
  transition: transform 0.2s;

  &:hover {
    transform: translateY(-5px);
  }

  h3 {
    font-size: 18px;
    margin-bottom: 10px;
  }

  p {
    margin: 5px 0;
    font-size: 14px;
    color: #f0f0f0;
  }

  .price {
    font-weight: bold;
    font-size: 18px;
    margin-top: 10px;
  }

  .watch-now {
    background-color: #00bfff;
    padding: 10px;
    text-align: center;
    color: white;
    border-radius: 5px;
    margin-top: 10px;
    cursor: pointer;
    text-decoration: none; /* Remove underline */
  }

  .icon {
    position: absolute;
    top: 15px;
    right: 15px;
    font-size: 20px;
    color: rgba(255, 255, 255, 0.5);
  }
`;

// Estilização da agenda
const ScheduleSection = styled.div`
  margin-top: 30px;
`;

const ScheduleList = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ScheduleItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  padding-bottom: 10px;
  border-bottom: 1px solid #ddd;

  span {
    font-size: 14px;
    color: #1b2a47;
  }

  .course {
    font-weight: bold;
  }

  .icon {
    margin-right: 10px;
    color: #00bfff;
  }
`;

// Estilização do progresso
const ProgressSection = styled.div`
  margin-top: 30px;
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProgressItem = styled.div`
  margin-bottom: 20px;
`;

const ProgressTitle = styled.h4`
  font-size: 16px;
  margin-bottom: 5px;
`;

const ProgressBar = styled.div`
  background-color: #e0e0e0;
  height: 10px;
  width: 100%;
  border-radius: 5px;
  position: relative;
  margin-bottom: 10px;

  .progress {
    background-color: #00bfff;
    height: 100%;
    border-radius: 5px;
    position: absolute;
    width: ${props => props.width || "0%"};
  }
`;

const ProgressInfo = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 12px;
  color: #666;
`;

const Home = () => {
  return (
    <HomeContainer>
      {/* Header */}
      <Header>
        <Logo>NextCoding</Logo>
        <UserMenu>
          <span className="icon">🔍</span>
          <span className="icon">⚙️</span>
          <UserName>Paulo FIlho</UserName>
        </UserMenu>
      </Header>

      {/* My Courses */}
      <CourseSection>
        <CourseTitle>My Courses</CourseTitle>
        <CoursesWrapper>
          {/* Primeiro Card com o Curso "Introdução ao Desenvolvimento Web com React" */}
          <CourseCard bgColor="#5dbecd">
            <h3>Introdução ao Desenvolvimento Web com React</h3>
            <p>20 Horas • 12 Lições</p>
            <p>Paulo Silas de Campos</p>
            <div className="price">R$ 25,90</div>
            <Link to="/course/1" className="watch-now">Iniciar</Link> {/* Link atualizado */}
            <FaPlayCircle className="icon" />
          </CourseCard>

          {/* Outros Cursos */}
          <CourseCard bgColor="#d3a355">
            <h3>Desenvolvimento Mobile com React</h3>
            <p>18 Lessons • 360 Minutes</p>
            <p>John Johnson</p>
            <div className="price">R$ 25.90</div>
            <div className="watch-now">Iniciar</div>
            <FaPlayCircle className="icon" />
          </CourseCard>

          <CourseCard bgColor="#a4a378">
            <h3>Course Three</h3>
            <p>28 Lessons • 400 Minutes</p>
            <p>William James</p>
            <div className="price">$1500</div>
            <div className="watch-now">Watch Now</div>
            <FaPlayCircle className="icon" />
          </CourseCard>

          <CourseCard bgColor="#e29494">
            <h3>Course Four</h3>
            <p>18 Lessons • 240 Minutes</p>
            <p>John Johnson</p>
            <div className="price">$850</div>
            <div className="watch-now">Watch Now</div>
            <FaPlayCircle className="icon" />
          </CourseCard>
        </CoursesWrapper>
      </CourseSection>

      {/* Lesson Schedule */}
      <ScheduleSection>
        <h3>Lesson Schedule</h3>
        <ScheduleList>
          <ScheduleItem>
            <div>
              <FaCalendarAlt className="icon" />
              <span className="course">Desenvolvimento Web com React</span> - <span>Lesson 4</span>
            </div>
            <div>
              <span>20/12/2023</span> - <span>10:30 AM</span>
            </div>
          </ScheduleItem>
          <ScheduleItem>
            <div>
              <FaCalendarAlt className="icon" />
              <span className="course">Desenvolvimento Mobile com React</span> - <span>Lesson 5</span>
            </div>
            <div>
              <span>21/12/2023</span> - <span>11:30 AM</span>
            </div>
          </ScheduleItem>
        </ScheduleList>
      </ScheduleSection>

      {/* Progress */}
      <ProgressSection>
        <h3>Progress</h3>
        <ProgressItem>
          <ProgressTitle>Course One</ProgressTitle>
          <ProgressBar width="70%">
            <div className="progress"></div>
          </ProgressBar>
          <ProgressInfo>
            <span>7/10 Lessons</span>
            <span>$1200</span>
          </ProgressInfo>
        </ProgressItem>

        <ProgressItem>
          <ProgressTitle>Course Two</ProgressTitle>
          <ProgressBar width="60%">
            <div className="progress"></div>
          </ProgressBar>
          <ProgressInfo>
            <span>7/12 Lessons</span>
            <span>$1600</span>
          </ProgressInfo>
        </ProgressItem>
      </ProgressSection>
    </HomeContainer>
  );
};

export default Home;
