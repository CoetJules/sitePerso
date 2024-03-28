import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Ce component est un component de test
@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrl: './playground.component.scss',
})
export class PlaygroundComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {
    console.log(
      'Nous sommes dans le composant playground, nous sommes ici pour faire des tests de folie !!'
    );

    const boxes = document.querySelectorAll('.box');
    boxes.forEach((box) => {
      box.addEventListener('mouseover', (event) => {
        const prevSibling = box.previousElementSibling;
        const prevPrevSibling = prevSibling?.previousElementSibling;

        const nextSibling = box.nextElementSibling;
        const nextNextSibling = nextSibling?.nextElementSibling;

        box.classList.add('hovered');

        if (prevPrevSibling) {
          prevPrevSibling.classList.add('prev2');
        }
        if (prevSibling) {
          prevSibling.classList.add('prev1');
        }

        if (nextNextSibling) {
          nextNextSibling.classList.add('next2');
        }
        if (nextSibling) {
          nextSibling.classList.add('next1');
        }
      });
      box.addEventListener('mouseout', (event) => {
        const parent = box.parentElement;
        const siblings = parent.querySelectorAll(
          '.next1,.next2,.prev1,.prev2,.hovered'
        );
        siblings.forEach((sibling) =>
          sibling.classList.remove(
            'next1',
            'next2',
            'prev1',
            'prev2',
            'hovered'
          )
        );
      });
    });
  }
}
