const HistoryAction = (history) => {
    return {
        goToMain() {
            history.push('/main');
        }
    }
} 

export default HistoryAction;