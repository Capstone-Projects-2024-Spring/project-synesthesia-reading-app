import Add from '@mui/icons-material/Add'
function Documents() {
    function upload_document() {

    }

    return (
        <>
            <div className="h-screen">
                <div id="actionBar" className="fixed top-0 left-0 bg-purple-900 w-screen h-16">
                    <div className="relative">
                        {/* Fix the Add icon to the top right corner */}
                        <Add
                            sx={{ color: 'white', fontSize: 50 }}
                            style={{ position: 'absolute', top: 4, right: 4 }}
                        />
                    </div>
                </div>
            </div>
        </>

    )
}

export default Documents;