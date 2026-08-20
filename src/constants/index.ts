import { Subject } from "@/types";

export const DEPARTMENTS = [
    'CS',
    'MATH',
    'ENGLISH',
]

export const DEPARTMENTS_OPTIONS = DEPARTMENTS.map((dept) => ({
    value: dept,
    label: dept,
}))

export const MOCK_SUBJECTS: Subject[] = [
    {
        id: 1,
        code: "CS101",
        name: "Introduction to Computer Science",
        department: "CS",
        description: "Fundamental concepts of programming, algorithms, data representation, and problem-solving using modern computing techniques.",
        createdAt: "2026-01-15T09:00:00.000Z",
    },
    {
        id: 2,
        code: "MATH201",
        name: "Linear Algebra & Differential Equations",
        department: "MATH",
        description: "Exploration of vector spaces, matrices, linear transformations, eigenvalues, and ordinary differential equations with practical applications.",
        createdAt: "2026-01-16T10:30:00.000Z",
    },
    {
        id: 3,
        code: "ENG102",
        name: "Academic Writing & Critical Thinking",
        department: "ENGLISH",
        description: "Development of advanced academic composition, rhetorical analysis, research methodologies, and persuasive argumentation.",
        createdAt: "2026-01-17T11:00:00.000Z",
    },
];