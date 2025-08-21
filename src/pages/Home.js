import MainSlider from '../Components/MainSlider';
import Specialties from '../Components/Specialties';
import MedicalCases from '../Components/MedicalCases';
import HospitalInfo from '../Components/HospitalInfo';

function Home() {
  return (
    <section>
      <MainSlider />
      <Specialties />
      <MedicalCases />
      <HospitalInfo />
    </section>
  )
}
export default Home;