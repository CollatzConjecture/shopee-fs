'use client';

import { Row, Col } from 'antd';

export default function AboutPage() {
  return (
    <Row justify="center">
      <Col xs={24} sm={22} md={20} lg={18} xl={16}>
        <div 
          style={{ 
            backgroundColor: '#f0f2f5', 
            padding: '20px', 
            borderRadius: '8px',
            marginBottom: '20px'
          }}
        >
          <h1 style={{ color: '#1890ff', fontSize: '2rem', textAlign: 'center' }}>About Me</h1>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333' }}>
            Hi, Im Jerry.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333' }}>
            Im a backend developer. This is the best I can do, please dont mock me :D hehe.
          </p>
          <p style={{ fontSize: '1rem', lineHeight: '1.6', color: '#333' }}>
            <b>Quote of the day: </b>CSS is hard.
          </p>
        </div>
      </Col>
    </Row>
  );
}


