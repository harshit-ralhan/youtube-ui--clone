import React from 'react'
import DOMPurify from "dompurify";

const DescriptionPara = ({descriptionHtml}) => {

    // Sanitize the HTML string
  const cleanHTML = DOMPurify.sanitize(descriptionHtml);

  return (
    <div dangerouslySetInnerHTML={{ __html: cleanHTML }} className="  visited:text-blue-600 active:font-semibold" />
  );
}

export default DescriptionPara
