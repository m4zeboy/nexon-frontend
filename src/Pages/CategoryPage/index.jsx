import React, { useState } from 'react'
import { useParams } from 'react-router'
import {Container} from '../../components/Container'
import categories from '../../services/categories.json';
import './style.scss'

export function CategoryPage() {
  const { categoryId } = useParams();
  const currentCategory = categories.find(category => category.id == categoryId) || {};
  return (
    <div className='category-page'>
      <Container>
        <h1>{currentCategory.title}</h1>

      </Container>
    </div>
  )
}
