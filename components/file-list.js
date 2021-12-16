import Link from 'next/link'

export default function FileList({files, language}){
    return <ul className="file-list" style={{"paddingTop": "30px"}}>
    {
      files
        .map((file) => (
          <li className="single-file" key={file.id}>
            <Link href={`/${language}/file/${file.id}`}>
              <a>
                {/* <img src={file.thumbnailUrl} alt=""/> */}
                <div className="thumbnail" style={{"background": `url(${file.thumbnailUrl})`}}></div>
                <div className="file-title">{file.title}</div>
              </a>
            </Link>
          </li>
        ))
    }

    <style jsx global>{
        `
        .file-list{
            list-style: none;
          }
  
          @media (min-width: 600px){
            .file-list{
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              grid-gap: 18px;
            }
          }
  
          @media (min-width: 900px){
            .file-list{
              grid-template-columns: repeat(3, 1fr);
            }
          }
  
          .file-list .single-file{
            margin-top: 30px;
          }
  
          .file-list .single-file a{
            display: block;
            padding: 21px;
            background-color: #fff;
            border-radius: 6px;
            box-shadow: 0 0 30px #ccc;
            text-decoration: none;
            border: 3px solid #EEE;
  
          }
  
          .file-list .single-file .thumbnail{
            background-color: #fff!important;
            height: 210px;
            padding: 30px;
            background-position: 50%!important;
            background-repeat: no-repeat!important;
            background-size: contain!important;
            cursor: pointer;
            background-origin: content-box!important;
          }
  
          .file-list .single-file .file-title{
            font-size: 21px;
            color: black;
            font-family: sans-serif;
            font-weight: bold;
            height: 60px;
            line-height: 1.5;
            display: flex;
            align-items: center;
          }
  
          .file-list .single-file a:hover,
          .file-list .single-file a:focus{
            text-decoration: underline;
            border: 3px solid #091353;
          }
        `
    }</style>
  </ul>
}