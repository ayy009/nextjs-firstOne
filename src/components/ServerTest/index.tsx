import SideOne from './SideOne'
import SideTwo from './SideTwo'
import SideThree from './SideThree'
import SideFour from './SideFour'

export default function ServerTest() {


  return (
    <div className='flex flex-col w-full relative min-h-screen'>
      <div className='block md:flex flex-row flex-wrap w-full justify-between'>
        <SideOne/>
        <SideTwo/>
      </div>
      <div className='w-full'>
        <SideThree/>
        <SideFour/>
      </div>

    </div>
  )
}