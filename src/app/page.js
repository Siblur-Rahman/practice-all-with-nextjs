"use client"
import TrHome from "@/components/TrHome";
// import handleToggleDesplay from '@/app/shared/CommonJS'
export default function Home() {
  const shortFullForm = [
    {
      about:'Programming Hero',
      form:[
        { short:'MS Rahman', full:'MD. SIBLUR RAHMAN'},
        { short:'PH', full:'Programming Hero'},
        { short:'MS', full:'Milestone'},
        { short:'CSM', full:'Conceptual Sessions Milestone'}
      ]
    },
    {
      about:'ETC',
      form:[
        { short:'LWS', full:'Learn with Sumit'},
        { short:'', full:''},
      ]
    },
  ]
  const handleToggleDesplay =(e)=>{
    // if(desplay==='hidden') {setDesplay('')}else{setDesplay('hidden')}
    e.target.nextElementSibling.classList.toggle('hidden')
  }
  return (
    <main className="mt-4">
      
          <button onClick={handleToggleDesplay} className="btn btn-primary w-full">Short && Full Form </button>
          <div className="hidden">
          {
            shortFullForm.map((data, index) =><TrHome key={index} data={data} index={index}/>)
           }
          </div>
      {/* <table className="table">
      <tbody>
           {
            shortFullForm.map((data, index) =><TrHome key={index} data={data} index={index}/>)
           }
    </tbody>
  </table> */}

    </main>
  );
}
