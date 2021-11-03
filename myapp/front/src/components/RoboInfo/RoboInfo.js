import {
    CircularProgress,
    Dialog,
    DialogTitle,
    TextField,
    Button,
  } from "@material-ui/core";
  import { withStyles } from "@material-ui/styles";
  import { memo, useEffect, useState } from "react";
  import { shallowEqual, useSelector } from "react-redux";
  import Header from "../Header/Header";
  import InputForm from "../InputForm/InputForm";
  import InfoList from "../InfoList/InfoList";
  
  function RoboInfo() {
    document.title = "Информация";
    const [modalFlag, setModalFlag] = useState(false);
    const info = useSelector((state) => state.info.infoList, shallowEqual);
    const loading = useSelector((state) => state.info.loading, shallowEqual);
    let error = useSelector((state) => state.info.error);
  
    useEffect(() => {
      if (error) {
        setModalFlag(true);
      }
    }, [error]);
  

    const StyledCircularProgress = withStyles(CircularProgress);
  
    return (
      <>
        {loading && <StyledCircularProgress />}
        <Header />
        <InfoList info={info} />
        <InputForm />
        <Dialog open={modalFlag}>
          <DialogTitle>Ошибка</DialogTitle>
          <TextField value={error} />
          <Button onClick={() => setModalFlag(false)}>Ок</Button>
        </Dialog>
      </>
    );
  }
  
  export default memo(RoboInfo);