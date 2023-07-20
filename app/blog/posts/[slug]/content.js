import HtmlParser from "react-html-parser"

export default function Content ({article}) {

  return (<>
    {HtmlParser(article)}
  </>)


}