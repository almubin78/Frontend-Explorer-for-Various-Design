import BatchSelector from "./BatchSelector";


const SettingForStudyTest = ({selectedBatch,setSelectedBatch,buttonText}) => {
  return (
    <div>
      <BatchSelector 
      onBatchSelect ={setSelectedBatch}
      buttonText = {buttonText}
      />
    </div>
  );
};

export default SettingForStudyTest;
