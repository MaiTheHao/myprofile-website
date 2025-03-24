import { USER_INFO, CAREER_INFO } from '../user';

export const ABOUT_SECTIONS = {
  personalInfo: USER_INFO.personalInfo,

  columns: {
    left: [
      {
        title: 'Journey & Experience',
        items: CAREER_INFO.experience,
      },
      {
        title: 'Direction & Personal Goals',
        items: [...CAREER_INFO.goals, CAREER_INFO.goal.detail],
      },
      {
        title: 'Hobbies & Fun Facts',
        items: CAREER_INFO.hobbies,
      },
    ],

    right: [
      {
        title: 'Key Skills',
        items: CAREER_INFO.skills,
      },
    ],
  },
};
