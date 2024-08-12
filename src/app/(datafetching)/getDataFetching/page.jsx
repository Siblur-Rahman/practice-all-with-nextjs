import Link from "next/link";

const getData = async () =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return data
}
const getDataFetching = async () => {
    const allData = await getData()
    return (
        <div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Index</th>
        <th>Title</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {
        // allData.map((data, index)=><Data key={index} index={index} data={data}></Data>)
        // we can slice 20 data
        allData?.slice(0, 20)?.map((data, index)=><tr key={index}>
        <td>
            <div className="font-bold">{index+1}</div>
        </td>
        <td>
            <div className="font-bold">{data.title}</div>
        </td>
        <th>
        <Link href={`/getDataFetching/${data.id}`} className="btn btn-ghost btn-xs">details</Link>
        </th>
  </tr>)
      }
    </tbody>
  </table>
</div>
    );
};

export default getDataFetching;