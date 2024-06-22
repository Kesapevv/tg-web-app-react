import React from 'react';

export class Task {
    constructor(title, subtitle, buttonTitle, link) {
        this.title = title;
        this.subtitle = subtitle;
        this.buttonTitle = buttonTitle;
        this.link = link;
    }
}