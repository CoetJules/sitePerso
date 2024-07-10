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

  showSlider() {
    var x = document.getElementById('slider');
    var y = document.getElementById('shadow');
    if (x.style.display === 'none' || x.style.display === '') {
      x.style.display = 'flex';
      if (y.style.display === 'flex') {
        y.style.display = 'none';
      }
    } else {
      x.style.display = 'none';
    }
  }

  showShadow() {
    var x = document.getElementById('shadow');
    var y = document.getElementById('slider');
    if (x.style.display === 'none' || x.style.display === '') {
      if (y.style.display === 'flex') {
        y.style.display = 'none';
      }
      x.style.display = 'flex';
      let text = document.getElementById('text');
      let light = document.getElementById('light');
      document.addEventListener('mousemove', function (event) {
        let mouseX = event.clientX;
        let mouseY = event.clientY;
        light.style.left = mouseX + 'px';
        light.style.top = mouseY + 'px';

        let distanceX = mouseX - text.offsetLeft - text.offsetWidth / 2;
        let distanceY = mouseY - text.offsetTop - text.offsetHeight / 2;

        let newShadow = '';
        for (var i = 0; i < 200; i++) {
          let shadowX = -distanceX * (i / 200);
          let shadowY = -distanceY * (i / 200);
          let opacity = 1 - i / 100;
          newShadow +=
            (newShadow ? ',' : '') +
            shadowX +
            'px ' +
            shadowY +
            'px 0 rgba(33,33,33,' +
            opacity +
            ')';
        }
        text.style.textShadow = newShadow;
      });
    } else {
      x.style.display = 'none';
    }
  }
}
