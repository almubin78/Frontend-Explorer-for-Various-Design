import BatchSelector from "./BatchSelector";


const SettingForStudyTest = ({selectedBatch,setSelectedBatch,buttonText}) => {
  return (
    <div>
      <BatchSelector onBatchSelect ={setSelectedBatch}/>
    </div>
  );
};

export default SettingForStudyTest;
