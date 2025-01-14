import EducationItem from './education-item';

export default function EducationTimeline() {
  return (
    <div>
      <h2 className='text-2xl font-bold text-zinc-100 text-center mb-10'>
        Education Timeline
      </h2>
      <EducationItem
        timeline='September 2024 - now'
        title='Lodz University of Technology'
        details={[
          'Faculty of Electrical, Electronic, Computer and Control Engineering',
          'Major: Computer Science',
          'Specialization: Internet Technologies',
          'Degree: Master of Science in Engineering',
        ]}
      />
      <EducationItem
        timeline='October 2020 - February 2024'
        title='Lodz University of Technology'
        details={[
          'Faculty of Electrical, Electronic, Computer and Control Engineering',
          'Major: Computer Science',
          'Specialization: Internet Technologies',
          'Degree: Bachelor of Science in Engineering',
        ]}
      />
    </div>
  );
}
