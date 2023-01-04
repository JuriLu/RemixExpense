import { Link } from '@remix-run/react'
import styles404 from '~/styles/404.css'

export default function NotFound(){
     return (
          <html lang="en">    
               <head>
                 <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600;900&display=swap" rel="stylesheet"/>
                 <script src="https://kit.fontawesome.com/4b9ba14b0f.js" crossorigin="anonymous"></script>
               </head>
               <body>
                 <div class="mainbox">
                   <div class="err">4</div>
                   <div class="err0">0</div>
                   {/* <i class="fa fa-question-circle"></i> */}
                   <div class="err2">4</div>
                   <div class="msg">Got deleted? Is hiding out in quarantine? Never existed in the first place?<p>Let's go <Link to="/">home</Link> and try from there.</p></div>
                 </div>
               </body>
          </html>
     )
}

export function links(){
     return [{rel:'stylesheet',href:styles404}]
}

