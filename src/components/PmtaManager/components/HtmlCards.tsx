
import { Card, CardBody, Spacer } from "@nextui-org/react"
import PmtaGroupButton from './PmtaGroupBurron'


export default function HtmlCardArray({ serverSelect }: any) {
  const staticHtmlArray = [
    '<div style="color: red;">This is a red text</div>',
    '<button style="background-color: blue; color: white;">Blue Button</button>',
    '<p><strong>Bold text</strong> and <em>italic text</em></p>',
    '<ul><li>Item 1</li><li>Item 2</li><li>Item 3</li></ul>',
    '<img src="https://via.placeholder.com/150" alt="Placeholder image" />'
  ]

  const staticHtmlArray1 = serverSelect


  return (
    <div>
      <Spacer y={5} />
      <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
        {staticHtmlArray1.map((html: any, index: any) => (
          <div>
               
          <Card key={index} className="mb-4 bg:white dark:bg-gray-dark rounded-sm">
          <div className='flex justify-center mt-2'>
                <h1 className='text-xl font-semibold'>Value: {html.value}</h1>
                <p>&nbsp; &nbsp; &nbsp;&nbsp;&nbsp;</p>
                <h1 className='text-xl font-semibold'>Label: {html.label}</h1>
              </div>
            <PmtaGroupButton />
            <CardBody>


              <div 
                className='bg-gray-2 dark:bg-slate-950 rounded-sm min-h-96 min-w-90'
                // Uncomment the line below if you want to render raw HTML content.
                // dangerouslySetInnerHTML={{ __html: html }}
              />
            </CardBody>
          </Card>

          </div>

        ))}
      </div>
    </div>
  )
}
