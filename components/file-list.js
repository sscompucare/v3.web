import Link from 'next/link'

export default function FileList({files, language}){
    return <ul className="file-list">
    {
      files
        .map((file) => (
          <li className="single-file" key={file.id}>
            <Link href={`/${language}/file/${file.id}`}>
              <a>
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
            box-shadow: 0 0 30px #eee;
            text-decoration: none;
            border: 1px solid #eee;
            transition: transform ease 0.3s;
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
            font-weight: bold;
            height: 60px;
            line-height: 1.5;
            display: flex;
            align-items: center;
          }
  
          .file-list .single-file a:hover,
          .file-list .single-file a:focus{
            transform: scale(1.03);
          }
        `
    }</style>
  </ul>
}