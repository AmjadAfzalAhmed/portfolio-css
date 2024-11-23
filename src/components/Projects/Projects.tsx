'use client'

import './Projects.css';
import project from '@/components/data/projects.json';
import { Card, Button } from 'react-bootstrap';
import Image from 'next/image';

const Projects = () => {
  return (
    <>
      <div className="container projects" id="projects">
        <h1>PROJECTS</h1>
        <div className="row">
          {
            project.map((data) => (
              <>
                <div key={data.title} className='my-4 col-sm-6 col-md-4 col-lg-3 mx-4'
                data-aos = "flip-right"
                data-aos-duration = "1000"
                >
                  <Card className='bg-dark text-light flex justify-center items-center p-4' style={{ width: '18rem',border:'1px solid yellow', boxShadow:'5px 5px 10px 10px rgba(101,175,10,0.5)' }}>

                    <Image
                      src={data.imageSrc}
                      alt="cardImage"
                      width={250}
                      height={200}
                      style={{ width: '250px', height: '200px', border:'2px solid yellow', borderRadius:'10px' }}
                    />

                    <Card.Body className='w-[ 300px] h-[150px] flex flex-col gap-2 mt-4'>
                      <Card.Title className='text-center'>{data.title}</Card.Title>
                      <Card.Text className='text-center text-yellow-500'>
                        {data.description}
                      </Card.Text>
                      <Button variant="primary" href={data.link} >
                        Click to visit</Button>
                    </Card.Body>
                  </Card>
                </div>
              </>
            ))
          }
        </div>
      </div>
    </>
  )
}

export default Projects