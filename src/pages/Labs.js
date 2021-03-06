import React from "react";
import axios from "axios";

function Labs() {

    const uploadModule = async (e) => {
        e.preventDefault();
        const desc = e.target[0].value;
        const upload_file = e.target[1].files[0];

        const formData = new FormData();
        formData.append("description", desc);
        formData.append("files", upload_file);
        formData.append("enctype", "multipart/form-data")

        const URL = "http://127.0.0.1:8000/uploads/labs"

        axios({
            method: "post",
            url: URL,
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",

            }
        }).then(function (response) {
            console.log(response)
        })
    }

    return (
        <>
            <h1>File Upload Test</h1>
            <form onSubmit={uploadModule}>
                description<input type="text" name="description" />
                <br />
            files<input type="file" name="files" />

                <input type="submit" value="SUBMIT" />
            </form>

        </>
    );

}

export default Labs;