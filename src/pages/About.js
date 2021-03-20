import { Navbar } from '../components';

export const About = () => (
  <div className='h-screen p-12'>
    <Navbar />
    <div className='grid justify-center mt-64'>
      <div className='mb-12 text-4xl font-bold text-gray-700'>
        This project was brought to life by these amazing people:
      </div>
      <ul className='space-y-4 text-2xl font-medium text-center text-gray-500'>
        <li>Mhamad Ibrahim</li>
        <li>Sally Sardouk</li>
        <li>Jana Zrayka</li>
        <li>Joseph Tarrazi</li>
        <li>Abdellatif Edelby</li>
      </ul>
    </div>
  </div>
);
