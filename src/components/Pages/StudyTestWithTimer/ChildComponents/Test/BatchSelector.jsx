
//this component used in SettingForStudyTest Component
const BatchSelector = ({onBatchSelect,buttonText}) => {
    const handleSelectBatch = (e)=>{
        e.preventDefault();
        console.log(e.target.value);
        onBatchSelect(e.target.value)
    }

    return (
        <div className="batch-selector">
        <label htmlFor="batch">Select Batch:</label>
        <select id="batch" onChange={handleSelectBatch}>
          <option value="">--Select a Batch--</option>
          <option value="Ten">Ten[ssc batch]</option>
          <option value="Ten">Ten</option>
          <option value="Nine">Nine</option>
          <option value="Eight">Eight</option>
          <option value="Seven">Seven</option>
        </select>
        <button>
          {buttonText}
        </button>
      </div>
    );
};

export default BatchSelector;