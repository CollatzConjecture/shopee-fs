'use client';

import { useState } from 'react';
import { Button, Row, Col } from 'antd';

export default function ContactPage() {
  const [showAnswer, setShowAnswer] = useState(false);

  const handleClick = () => {
    setShowAnswer(true);
  };

  return (
    <Row gutter={[16, 16]} style={{ backgroundColor: '#f0f2f5', padding: '20px', borderRadius: '8px', marginBottom: '20px' }}>
      <Col xs={24} md={12}>
        <h1 style={{ color: '#1890ff' }}>Contact Me</h1>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
          Im single, heres my number: 08777688779
        </p>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
          If somehow this project is broken, I promise it worked on my machine!
        </p>
      </Col>

      <Col xs={24}>
        <h1 style={{ color: '#1890ff' }}>Riddle</h1>
        <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333' }}>
          Have you ever wondered why front-end devs dont have many friends?
        </p>
        {!showAnswer && (
          <Button type="primary" onClick={handleClick}>
            Show Answer
          </Button>
        )}
        {showAnswer && (
          <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#333', marginTop: '10px' }}>
            Because they dont know how to join tables!
          </p>
        )}
      </Col>
    </Row>
  );
}

