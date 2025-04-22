export interface ProjectData {
 id: number;
 projectName: string;
 createdBy: string;
 img: string;
 nn: string;
 description: string;
 projectImg?: string[];
}

export interface Datas {
 title: string;
 path: string;
}

export interface Avatars {
 id: number;
 img: string;
 nn: string;
}

export interface ProblemsSolved {
 key: string;
 title: string;
 value: string;
}

export interface KeyFeaturesData {
 feature: string;
 description: string;
}
