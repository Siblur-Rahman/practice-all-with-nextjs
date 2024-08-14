

const TrHome = ({data, index}) => {
    return (
        <>
             {/* <tr>
        <td colSpan={2} className="font-bold bg-red-500">
            <div className="text text-center text-gray-100">{index+1}. {data.about}</div>
            <div className="text-center">
                <span className="w-1/2 inline-block">Short Form</span>
                <span className="w-1/2 inline-block">Full Form</span>
        </div>
        </td>
        </tr>

        {
            data.form.map((form, ind) =>
                <tr key={ind}>
            <td>
              <div className="font-bold">{form.short}</div>
          </td>
          <td>
              <div className="font-bold">{form.full}</div>
          </td>
          </tr>
            )
        } */}



             
        <div className="font-bold bg-red-500">
            <div className="text text-center text-gray-100">{index+1}. {data.about}</div>
            <div className="text-center">
                <span className="w-1/2 inline-block">Short Form</span>
                <span className="w-1/2 inline-block">Full Form</span>
            </div>
        </div>
       

        {
            data.form.map((form, ind) =>
                <div key={ind}>
            <span className="w-1/2 inline-block">
              <div className="font-bold">{form.short}</div>
          </span>
          <span className="w-1/2 inline-block">
              <div className="font-bold">{form.full}</div>
          </span>
          </div>
            )
        }
        </>
    );
};

export default TrHome;